export function useSearchParams(names: string[]) {
    const searchParams = new URLSearchParams(window.location.search);
    return names.map((name) => searchParams.get(name));
}
