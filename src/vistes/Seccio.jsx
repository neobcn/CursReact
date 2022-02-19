import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Seccio = () => {   
    
    const {id} = useParams();
    const SeccioLazy = lazy(() => import(`../vistes/seccions/Seccio${id}`).catch(() => import('../vistes/errors/_404')));    

    const {ref, inView } = useInView({
        threshold: 0.0
    });
    
    return (
        <Suspense fallback={<div>Carregant contingut, espereu si us plau...</div>}>
            <div ref={ref}>
                {inView && <SeccioLazy />}
            </div>
        </Suspense>
    )
}

export default Seccio