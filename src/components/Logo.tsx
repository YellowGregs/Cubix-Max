// Useless, but it helps to provide a template for a logo

import { Box } from 'lucide-react';

export function Logo({ className = "w-8 h-8" }) {
  return <Box className={`${className} text-purple-400`} />;
}