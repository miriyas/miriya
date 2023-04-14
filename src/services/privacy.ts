import apiClient from '@/services/apiClient';

export const getPrivacyMarkdownApi = () => apiClient('/privacy/markdown');
