import MenuItem from './MenuItem.jsx'

export default function Menu({isMobile=false}) {
  return (
    <>
      <MenuItem category="ranking" isDropdown={true} isMobile={isMobile}/>
      <MenuItem category="magazine" isDropdown={true} isMobile={isMobile}/>
      <MenuItem category="newsletters" isDropdown={false} isMobile={isMobile}/>
      <MenuItem category="podcasts" isDropdown={false} isMobile={isMobile}/>
      <MenuItem category="more" isDropdown={true} isMobile={isMobile}/>
    </>
  );
}
