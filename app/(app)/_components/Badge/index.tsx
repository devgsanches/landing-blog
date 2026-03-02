interface BadgeProps {
  children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => (
  <div className="flex px-3 py-1.5 bg-blue-400 rounded w-fit">
    <span className="text-blue-200 text-xs uppercase">{children}</span>
  </div>
)
