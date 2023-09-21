import Link from 'next/link';

const Header = ({props}) => {
  const handleClick = () => {
    let message = "Signed Out";
    alert(message);
    props(message)
    // Add any other logic you want to execute on button click
  };
  return (
    <header style={{ background: '#333', padding: '10px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <img src="images/ik_logo.png" alt="Logo" style={{ width: '65px', height: '50px', marginLeft: '15px' }} />
        </Link>
        <h1 style={{ marginLeft: '20px' }}>Fleet Commander</h1>
      </div>
      <div>
        {/* <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
          Profile
        </button> */}
        <span style={{ color: '#ccc', margin: '0 5px' }}>|</span>
        <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }} onClick={handleClick}>
          Sign Out
        </button>
      </div>
    </header>
  );
}

export default Header;
