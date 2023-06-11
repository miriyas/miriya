import { apiBe, apiFe } from '@/services';
import { DslrEditProps, PentaxDslr, PentaxSlr, SlrEditProps } from '@/types/pentaxes.d';

export const getReadMeMarkdownApi = () => apiFe('/pentax/markdown/readme');

export const getDescMarkdownApi = () => apiFe('/pentax/markdown/desc');

export const getPentaxDslrDataApi = () => apiBe<PentaxDslr[]>('/pentax/dslr');

export const getPentaxSlrDataApi = () => apiBe<PentaxSlr[]>('/pentax/slr');

export const patchPentaxDslrAPI = (props: DslrEditProps) => apiBe.patch('/pentax/dslr', props);

export const patchPentaxSlrAPI = (props: SlrEditProps) => apiBe.patch('/pentax/slr', props);
