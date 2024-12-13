import '../index.css';
import { Link, useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
  
export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="bg-background shadow-md shadow-background w-full border-b">
            <ul className="text-gray-400 flex gap-8 p-4">
                <li className="hover:text-gray-200 p-4 transition">
                <Link to="/">Home</Link>
                </li>
                <li className="hover:text-gray-200 p-4 transition">
                <DropdownMenu>
                    <DropdownMenuTrigger >Swords</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={()=>navigate('/lightsword')}>Light Sword</DropdownMenuItem>
                        <DropdownMenuItem onSelect={()=>navigate('/darksword')}>Dark Sword</DropdownMenuItem>
                        <DropdownMenuItem onSelect={()=>navigate('/lightningsword')}>Lightning Sword</DropdownMenuItem>
                        <DropdownMenuItem onSelect={()=>navigate('/firesword')}>Fire Sword</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                </li>
                <li className="hover:text-gray-200 p-4 transition">
                <Link to="/rune">Rune</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
    }
