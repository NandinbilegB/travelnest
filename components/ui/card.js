import { cn } from "../../lib/utils"

const Card = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  )
}
Card.displayName = "Card"

const CardHeader = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}
CardHeader.displayName = "CardHeader"

const CardTitle = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}
CardTitle.displayName = "CardTitle"

const CardDescription = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
CardDescription.displayName = "CardDescription"

const CardContent = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  )
}
CardContent.displayName = "CardContent"

const CardFooter = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }