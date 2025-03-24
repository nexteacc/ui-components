import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CopyButtonProps {
  value: string;
  label?: string;
}

export function CopyButton({ value, label = "Copy" }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  return (
    <Button
      size="sm"
      variant="outline"
      className="relative h-8 w-8 md:h-auto md:w-auto md:px-3"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      title={label}
    >
      <span className="sr-only">{label}</span>
      {hasCopied ? (
        <CheckIcon className="h-4 w-4 md:mr-2" />
      ) : (
        <CopyIcon className="h-4 w-4 md:mr-2" />
      )}
      <span className="hidden md:inline-flex">{hasCopied ? "Copied" : label}</span>
    </Button>
  );
}
