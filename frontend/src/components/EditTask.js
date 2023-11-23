import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("New");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getTaskById();
  }, []);   

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/tasks/${id}`, {
        title,
        description,
        dueDate,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getTaskById = async () => {
    const response = await axios.get(`http://localhost:5000/tasks/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setDueDate(response.data.dueDate);
    setStatus(response.data.status);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateTask}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Due Date</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="Date"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;