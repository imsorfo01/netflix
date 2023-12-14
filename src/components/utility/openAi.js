import OpenAI from 'openai';
import { openAiKey } from './constant';

const openai = new OpenAI({
  apiKey: openAiKey, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});
export default openai;