import { NavItem } from './nav-item'

export const pages: NavItem[] = [
    {name: "Home", id: "home", home: true},
    {name: "About", id: "about"},
    {name: "Education", id: "education"},
    {name: "Projects", id: "projects", disabled: true, tooltip: "Coming soon!"},
    {name: "Contact", id: "contact"}
]