import React, { useState, useEffect } from "react";

import "../../../shared/styles.css";
import eventServices from "../../../services/event-services";
import { useHistory } from "react-router";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [location, setLocation] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState({
    nameError : "",
    descriptionError : "",
    dateError : "",
    imageURLError : "",
    locationError : "",
  });

  function validate() {
    let nameError = "";
    let descriptionError = "";
    let dateError = "";
    let imageURLError = "";
    let locationError = "";

    if (!name) {
      nameError = "Please Provide name";
    }
    if (!description) {
      descriptionError = "Please provide description";
    }
    if (!date) {
      dateError = "Please Provide date";
    }
    if (!imageURL) {
      imageURLError = "Please provide description";
    }
    if (!location) {
      locationError = "Please provide location";
    }

    if (
      nameError ||
      descriptionError ||
      dateError ||
      imageURLError ||
      locationError
    ) {
      setErrors({
        nameError,
        descriptionError,
        dateError,
        imageURLError,
        locationError,
      });
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      eventServices
        .create({ name, description, location, date, imageURL })
        .then(() => history.push("/"))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeImageURL = (e) => {
    setImageURL(e.target.value);
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form className="Create" onSubmit={handleSubmit}>
      <p className="title">Create your event</p>
      <div className="input">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChangeName}
          value={name}
        />
        {errors.nameError && (
          <p className="text-fuchsia text-sm font-mulish font-normal">
            {errors.nameError}
          </p>
        )}
      </div>
      <div className="input">
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={onChangeDescription}
          value={description}
        />
        {errors.descriptionError && (
          <p className="text-fuchsia text-sm font-mulish font-normal">
            {errors.descriptionError}
          </p>
        )}
      </div>
      <div className="input">
        <input
          type="date"
          name="date"
          min="01/01/2021"
          max="01/01/2030"
          onChange={onChangeDate}
          value={date}
        />
        {errors.dateError && (
          <p className="text-fuchsia text-sm font-mulish font-normal">
            {errors.dateError}
          </p>
        )}
      </div>
      <div className="input">
        <input
          type="text"
          name="imageURL"
          placeholder="imageURL"
          onChange={onChangeImageURL}
          value={imageURL}
        />
        {errors.imageURLError && (
          <p className="text-fuchsia text-sm font-mulish font-normal">
            {errors.imageURLError}
          </p>
        )}
      </div>
      <div className="input">
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={onChangeLocation}
          value={location}
        />
        {errors.locationError && (
          <p className="text-fuchsia text-sm font-mulish font-normal">
            {errors.locationError}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="btn"
        style={{
          cursor: "pointer",
        }}
      >
        CREATE
      </button>
    </form>
  );
};

/*class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = { description: '', location: '', name: '', date: '', imageURL: '' }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({name: e.target.value});
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value});
    }

    onChangeDate(e) {
        this.setState({date: e.target.value});
    }

    onChangeLocation(e) {
        this.setState({location: e.target.value});
    }

    onChangeImageURL(e) {
        this.setState({imageURL: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, description, location, date, imageURL } = this.state;

        eventServices.create({ name, description, location, date, imageURL })
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const {description, location, name, date, imageURL} = this.state;

        return (
            <form className="Create" onSubmit={this.handleSubmit}>
                <p className="title">Create your event</p>
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.onChangeName}
                        value={name}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.onChangeDescription}
                        value={description}
                    />
                </div>
                <div className="input">
                    <input
                        type="date"
                        name="date"
                        min="01/01/2021"
                        max="01/01/2030"
                        onChange={this.onChangeDate}
                        value={date}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="imageURL"
                        onChange={this.onChangeImageURL}
                        value={imageURL}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={this.onChangeLocation}
                        value={location}
                    />
                </div>
                <button type="submit" className="btn">CREATE</button>
            </form>
        )
    }
}*/

export default Create;
