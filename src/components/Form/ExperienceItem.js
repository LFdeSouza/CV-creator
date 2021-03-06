const ExperienceItem = ({ id, onDelete, getInfo }) => (
  <div id={id} className="forms">
    <input
      type="text"
      placeholder="Position"
      name="position"
      onChange={(e) =>
        getInfo(
          "experience",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="Company"
      name="company"
      onChange={(e) =>
        getInfo(
          "experience",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="City"
      name="workCity"
      onChange={(e) =>
        getInfo(
          "experience",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="From"
      name="workFrom"
      onChange={(e) =>
        getInfo(
          "experience",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="To"
      name="workTo"
      onChange={(e) =>
        getInfo(
          "experience",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <button
      className="btn"
      onClick={(e) => onDelete("experience", e.target.parentElement.id)}
    >
      Delete
    </button>
  </div>
);

export default ExperienceItem;
