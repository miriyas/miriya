import apiClient from '@/services/apiClient';
import { DslrEditProps, FBPentaxDslr, FBPentaxSlr, SlrEditProps } from '@/types/pentaxes.d';

export const getReadMeMarkdownApi = () => apiClient('/pentax/markdown/readme');

export const getDescMarkdownApi = () => apiClient('/pentax/markdown/desc');

export const getPentaxDslrDataApi = () => apiClient<FBPentaxDslr[]>('/pentax/dslr');

export const getPentaxSlrDataApi = () => apiClient<FBPentaxSlr[]>('/pentax/slr');

export const patchPentaxDslrAPI = (props: DslrEditProps) => apiClient.patch('/pentax/dslr', props);

export const patchPentaxSlrAPI = (props: SlrEditProps) => apiClient.patch('/pentax/slr', props);
