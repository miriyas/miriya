import apiClient from '@/services/apiClient';

export const getReadMeMarkdownApi = () => apiClient('/pentax/markdown/readme');

export const getDescMarkdownApi = () => apiClient('/pentax/markdown/desc');
