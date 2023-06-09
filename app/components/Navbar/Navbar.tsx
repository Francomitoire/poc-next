import Link from "next/link"

const routes = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Settings',
    to: '/dashboard/settings'
  },
  {
    label: 'User',
    to: '/dashboard/user'
  },
    
]

export default function Navbar() {
  return <nav style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#0d1b30',
    color: '#ffffff'
}}>
    <p>Next JS</p>
    <ul style={{
      listStyle: 'none', 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: '10px'
    }}>
      {routes.map((route, index) => <li key={index}>
        <Link href={route.to}>{route.label}</Link>
      </li> )}
    </ul>
  </nav>
}