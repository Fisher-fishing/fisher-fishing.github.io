function Header({ activeSection, navigation, profile, scrolled }) {
  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <a className="brand" href="#intro" aria-label={`${profile.name}，返回简介`}>
        {profile.name}
        <span>个人简历</span>
      </a>
      <nav aria-label="页面导航">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;

