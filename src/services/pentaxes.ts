import apiClient from '@/services/apiClient';

export const getReadMeMarkdownApi = () => apiClient('/pentaxes/markdown/readme');

export const getDescMarkdownApi = () => apiClient('/pentaxes/markdown/desc');
