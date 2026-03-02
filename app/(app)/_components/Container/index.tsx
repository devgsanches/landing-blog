interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className="max-w-7xl mx-auto flex flex-col">
    {children}
  </div>
)
