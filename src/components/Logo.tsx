type LogoProps = {
  variant?: 'default' | 'light'
}

/** The real Fresh Blendz Commercial ribbon logo. */
export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <span className={`logo ${variant === 'light' ? 'logo--light' : ''}`}>
      <img src="/fresh-blendz-logo.png" alt="Fresh Blendz Commercial" width={584} height={196} />
    </span>
  )
}
