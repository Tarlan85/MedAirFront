import React, { useMemo } from 'react';

const useLabel = ({activeRow}) => {

    const label = useMemo(() => {
        return (text) => {
            return (
                <div className={activeRow && 'rowClassName_active'}>
                    {text}
                </div>
            );
        };
    }, [activeRow]);
    return label
};

export default useLabel;