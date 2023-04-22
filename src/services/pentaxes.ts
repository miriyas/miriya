import apiClient from '@/services/apiClient';
import { FBPentaxDslr, FBPentaxSlr } from '@/types/pentaxes.d';

export const getReadMeMarkdownApi = () => apiClient('/pentax/markdown/readme');

export const getDescMarkdownApi = () => apiClient('/pentax/markdown/desc');

export const getPentaxDslrDataApi = () => apiClient<FBPentaxDslr[]>('/pentax/dslr');

export const getPentaxSlrDataApi = () => apiClient<FBPentaxSlr[]>('/pentax/slr');
