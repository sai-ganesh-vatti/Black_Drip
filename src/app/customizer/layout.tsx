/**
 * /customizer layout — intentionally bare.
 * Opts OUT of the root layout's Navbar / Footer / <main> wrapper
 * so the 3D customizer can take 100dvh with its own grid.
 */
export default function CustomizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
