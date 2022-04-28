import { useEffect, useRef } from 'react';
import { controller } from '../utils/Controller';

type UseControllerOptions = { address: string };
export function useController(options: UseControllerOptions) {
    const controllerRef = useRef(controller);

    useEffect(() => {
        controllerRef.current.init(options);
    }, []);

    return { controller: controllerRef.current };
}
