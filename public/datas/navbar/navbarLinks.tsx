export type TNavLinks = {
    name: string;
    path: string;
    children?: any;
}
export const navLinks: TNavLinks[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About us",
        path: "",
        children: [
            {
                name: "About Us",
                path: "/about"
            },
            {
                name: "Chairman Message",
                path: "/chairmanMessage"
            },
            {
                name: "Managing directing message",
                path: "#managingDirector"
            },
            {
                name: "Board Of director",
                path: "/boardOfDirector"
            },
            {
                name: "Executive team",
                path: "/executiveTeam"
            },
            {
                name: "Share holders",
                path: "/shareHolders"
            },
            {
                name: "Membership and certificate",
                path: "/certificate"
            },
        ]
    },
    {
        name: "Our Team",
        path: "/teams"
    },
    {
        name: "Project",
        path: "",
        children: [
            {
                name: "Blue Sly City",
                path: "/project"
            },
            {
                name: "Blue Sky Flat Project",
                path: "/flatProject"
            }
        ]
    },
    {
        name: "Blog",
        path: "/blog"
    }
]