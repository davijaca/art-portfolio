export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#0d2538' : '#DCD6C8');
  const particle = (darkMode = false) => (darkMode ? '#faf9de' : '#5C7C8A');
  const links = (darkMode = false) => (darkMode ? '#63becf' : '#910a21');

  return {
    background,
    particle,
    links,
  };
};