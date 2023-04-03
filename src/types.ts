export interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'error'
  content: string
}
