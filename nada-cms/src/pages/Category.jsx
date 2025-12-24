import React, { useEffect, useState } from "react";
import { Supabase } from '../Supabase';
import './Category.css';
import Menu from "../components/Menu";
import Header from "../components/Header";
import i3 from '../assets/delete-bin-line.png';


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Create slug from title
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  // 🔹 Fetch categories
  const fetchCategories = async () => {
    const { data, error } = await Supabase
      .from("Categories")
      .select("*")
      .order("id", { ascending: true });

    if (!error) setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 🔹 Add category
  const addCategory = async () => {
    if (!title.trim()) return;

    setLoading(true);

    const slug = createSlug(title);

    const { error } = await Supabase.from("Categories").insert([
      {
        title,
        slug,
      },
    ]);

    setLoading(false);

    if (!error) {
      setTitle("");
      fetchCategories();
    }
  };

  // 🔹 Delete category
  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    const { error } = await Supabase
      .from("Categories")
      .delete()
      .eq("id", id);

    if (!error) fetchCategories();
  };

  return (<>

  <div className="bg">
        <section className="row_bigg">
          <div className="leftt">
            <Menu />
          </div>

          <div className="rightt">
            <Header />


  
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h2 className="manage">Manage Categories</h2>

      {/* Add Category */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Category title (e.g. UX UI)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addCategory} disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </div>

      {/* Category List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li
            key={cat.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <span>
              <strong>{cat.title}</strong>
              <br />
              <small>/{cat.slug}</small>
            </span>

            <div onClick={() => deleteCategory(cat.id)}>
                 <img src={i3} alt="Delete" />
            </div>
          </li>
        ))}
      </ul>

      {categories.length === 0 && <p>No categories yet.</p>}
    </div>

    <div className="space"></div>
    </div>
    </section>
    </div>
  </>);
};

export default CategoryPage;
