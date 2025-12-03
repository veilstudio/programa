import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES } from '../constants';

// Initialize the API client
// Note: In a real production app, you might proxy this through a backend to protect the key,
// but for this client-side demo, we use the env variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da empresa "${COMPANY_INFO.name}".
A empresa tem ${COMPANY_INFO.yearsActive} anos de experiência (fundada em 16/03/2011) e sede em ${COMPANY_INFO.hq}.
Morada atual: ${COMPANY_INFO.address}.
Contacto: ${COMPANY_INFO.phone}, Email: ${COMPANY_INFO.email}.
Facebook: ${COMPANY_INFO.facebook}

Serviços oferecidos:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

O seu objetivo é ajudar clientes a encontrar produtos de limpeza, agendar desinfestações ou tirar dúvidas sobre manutenção industrial.
Responda sempre em Português de Portugal. Seja profissional, cortês e conciso.
Se lhe perguntarem preços, peça para contactarem através do email ou telefone para um orçamento personalizado.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history, 
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar a sua resposta neste momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao comunicar com o assistente inteligente. Por favor tente novamente mais tarde.";
  }
};