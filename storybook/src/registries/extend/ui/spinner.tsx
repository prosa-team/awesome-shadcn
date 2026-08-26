import type React from "react"

import { cn } from "@/registries/extend/lib/utils"
import { Loader2 } from "lucide-react"

export function Spinner({
  className,
  ...props
}: React.ComponentProps<"svg">): React.ReactElement {
  return (
    <Loader2 aria-label="Loading" className={cn("animate-spin", className)} role="status" {...props} />
  )
}
