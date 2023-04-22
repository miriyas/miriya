import { apiClientLocal } from '@/services/apiClient';

export const getPrivacyMarkdownApi = () => apiClientLocal('/privacy/markdown');
