let debounceTimer: ReturnType<typeof setTimeout> | null = null;

export const useDebounceAddProduct = () => {
   const debounce = (func: () => void, delay: number) => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(func, delay);
   };

   return { debounce };
};
