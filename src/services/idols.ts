import apiClient from '@/services/apiClient';

export const crawlIdolData = () => apiClient('/idols/crawl');
