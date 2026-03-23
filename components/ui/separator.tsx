// src/components/ui/separator.tsx
import * as React from 'react';

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'horizontal' | 'vertical';
};

export function Separator({
    orientation = 'horizontal',
    className = '',
    ...props
}: SeparatorProps) {
    const base =
        orientation === 'horizontal'
            ? 'h-px w-full'
            : 'w-px h-full';

    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={`${base} bg-border ${className}`}
            {...props}
        />
    );
}
