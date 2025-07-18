import supabase from "@/lib/db";
import { IMenu } from "@/types/menu";
import { useEffect, useState } from "react";

const Home = () => {
  const [menus, setMenus] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const {data, error} = await supabase.from('menus').select('*');

      if(error) console.log('error: ', error);
      else setMenus(data);
    };

    fetchMenus();
  }, [supabase])

  console.log(menus);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;