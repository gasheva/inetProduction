import {ref} from 'vue';

export const useFetch = (callback: Function) => {
    const isLoading = ref<boolean>(false);
    const fetch = async () => {
        isLoading.value = true;
        await callback();
        isLoading.value = false;
    };

    return {
        fetch,
        isLoading,
    };
};