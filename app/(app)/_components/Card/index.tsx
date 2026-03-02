interface CardProps {
  children: React.ReactNode
}

export const Card = ({
  children,
}: CardProps) => (
  <div className="bg-gray-500 rounded-3xl p-12">
    {children}
  </div>
)
