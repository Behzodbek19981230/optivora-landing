"use client"

import * as React from 'react'

type ContextType = {
  open: boolean
  setOpen: (v: boolean) => void
  rootRef: React.RefObject<HTMLDivElement | null>
}

const DropdownContext = React.createContext<ContextType | null>(null)

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('click', onDoc)
      document.addEventListener('keydown', onKey)
    }
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative inline-block" ref={rootRef}>
      <DropdownContext.Provider value={{ open, setOpen, rootRef }}>{children}</DropdownContext.Provider>
    </div>
  )
}

export function DropdownMenuTrigger({ children, asChild = false }: { children: React.ReactNode; asChild?: boolean }) {
  const ctx = React.useContext(DropdownContext)
  if (!ctx) return null

  const { setOpen } = ctx

  const toggle = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    ctx.setOpen(!ctx.open)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, {
      onClick: (e: React.MouseEvent) => {
        ;(children as any).props?.onClick?.(e)
        toggle(e)
      },
    } as any)
  }

  return (
    <button type="button" onClick={toggle} className="px-2 py-1 inline-flex items-center">
      {children}
    </button>
  )
}

export function DropdownMenuContent({ children, align = 'start', className = '' }: { children: React.ReactNode; align?: 'start' | 'end'; className?: string }) {
  const ctx = React.useContext(DropdownContext)
  if (!ctx) return null
  const { open } = ctx
  const alignClass = align === 'end' ? 'right-0' : 'left-0'
  if (!open) return null

  return (
    <div className={`absolute z-50 mt-2 min-w-[180px] bg-card border border-border rounded shadow ${alignClass} ${className}`}>
      {children}
    </div>
  )
}

export function DropdownMenuItem({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  const ctx = React.useContext(DropdownContext)
  const handle = () => {
    onClick?.()
    ctx?.setOpen(false)
  }
  return (
    <div
      role="menuitem"
      onClick={handle}
      className={`px-3 py-2 text-sm hover:bg-accent/10 cursor-pointer flex items-center gap-2 ${className}`}
    >
      {children}
    </div>
  )
}

export default DropdownMenu
