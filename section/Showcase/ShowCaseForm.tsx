import React, { useState } from "react";
import Alerts from "../../components/Alerts";
import Button from "../../components/Button";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

function ShowCaseForm() {
  const eventTags = [
    { id: 1, name: "App" },
    { id: 2, name: "Website" },
    { id: 3, name: "Games" },
  ];
  const eventCategory = [
    { name: "Project", id: 1 },
    { name: "App", id: 2 },
  ];
  const [name, setName] = useState<any>("");
  const [title, setProjectName] = useState<any>("");
  const [github_link, setGithub_link] = useState<any>("");
  const [twitterLink, setTwitterLink] = useState<any>("");
  const [demoLink, setDemoLink] = useState<any>("");
  const [event_categories, setEvent_category] = useState<any>([]);
  const [event_tags, setEventsTags] = useState<any>([]);
  const [profileImage, setProfileImage] = useState<any>("");
  const [shortDes, setShortDes] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [coverImg, setCoverImage] = useState<any>("");

  const [errors, setErrors] = useState<any>({});

  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (title.length <= 0) {
      tempErrors["title"] = true;
      isValid = false;
    }
    if (github_link.length <= 0) {
      tempErrors["github_link"] = true;
      isValid = false;
    }
    if (twitterLink.length <= 0) {
      tempErrors["twitterLink"] = true;
      isValid = false;
    }
    if (demoLink.length <= 0) {
      tempErrors["demoLink"] = true;
      isValid = false;
    }
    if (event_categories.length <= 0) {
      tempErrors["event_categories"] = true;
      isValid = false;
    }
    if (event_tags.length <= 0) {
      tempErrors["event_tags"] = true;
      isValid = false;
    }
    if (profileImage.length <= 0) {
      tempErrors["profileImage"] = true;
      isValid = false;
    }
    if (shortDes.length <= 0) {
      tempErrors["shortDes"] = true;
      isValid = false;
    }
    if (description.length <= 0) {
      tempErrors["description"] = true;
      isValid = false;
    }
    if (coverImg.length <= 0) {
      tempErrors["coverImg"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  const postData = {
    name,
    title,
    github_link,
    twitterLink,
    demoLink,
    event_categories,
    event_tags,
    shortDes,
    description,
    slug: title,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      let formData = new FormData();
      formData.append("files.coverImg", coverImg);
      formData.append("data", JSON.stringify(postData));
      console.log(postData, "postData");

      try {
        axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
          data: formData,
        }).then((res) => {
          console.log(res, " res");
          alert("Done...")
        });
      } catch (error) {
        console.log(error);
        
      }
    }
  };

  return (
    <div className="container z-30 py-14">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="form-lable{">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="John Doe"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
            {errors.name && name.trim().length == 0 && (
              <Alerts danger>Name is required</Alerts>
            )}
          </div>
          <div>
            <label htmlFor="project_title" className="form-lable">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              className="form-input"
              placeholder="project Title"
              value={title}
              onChange={(e: any) => {
                setProjectName(e.target.value);
              }}
            />
            {errors.title && title.trim().length == 0 && (
              <Alerts danger>project Title is required</Alerts>
            )}
          </div>
          <div>
            <label htmlFor="github_link" className="form-lable{">
              Github Link
            </label>
            <input
              type="url"
              id="github_link"
              className="form-input"
              placeholder="http://github.com"
              value={github_link}
              onChange={(e: any) => {
                setGithub_link(e.target.value);
              }}
            />
            {errors.github_link && github_link.trim().length == 0 && (
              <Alerts danger>Github link is required</Alerts>
            )}
          </div>
          <div>
            <label htmlFor="twitter_link" className="form-lable{">
              Twitter Link
            </label>
            <input
              type="url"
              id="twitter_link"
              className="form-input"
              placeholder="http://twitter.com"
              value={twitterLink}
              onChange={(e: any) => {
                setTwitterLink(e.target.value);
              }}
            />
            {errors.twitterLink && twitterLink.trim().length == 0 && (
              <Alerts danger>Twitter link is required</Alerts>
            )}
          </div>
          <div>
            <label htmlFor="demo_link" className="form-lable{">
              Demo Link
            </label>
            <input
              type="url"
              id="demo_link"
              className="form-input"
              placeholder="http://xyz.com"
              value={demoLink}
              onChange={(e: any) => {
                setDemoLink(e.target.value);
              }}
            />
            {errors.demoLink && demoLink.trim().length == 0 && (
              <Alerts danger>Demo link is required</Alerts>
            )}
          </div>
          <div>
            <label htmlFor="category" className="form-lable">
              Select Category
            </label>
            <Multiselect
              options={eventCategory}
              displayValue="name"
              onSelect={(e: any) => setEvent_category(e)}
            />
            {/* {errors.event_categories && event_categories.trim().length==0 && <Alerts danger>Category is required</Alerts>} */}
          </div>
          <div>
            <label htmlFor="Tags" className="form-lable">
              Select Tags
            </label>
            <Multiselect
              options={eventTags}
              displayValue="name"
              onSelect={(e: any) => setEventsTags(e)}
            />
            {/* {errors.event_tags && event_tags.trim().length==0 && <Alerts danger>Category is required</Alerts>} */}
          </div>
          <div>
            <label className="form-lable{" htmlFor="file">
              Upload Profile Image
            </label>
            <input
              className="file-input"
              id="file"
              name="file"
              type="file"
              onChange={(e: any) => {
                setProfileImage(e.target.files[0]);
              }}
            />
            {/* {errors.profileImage && (
              <Alerts danger>Profile Imgae is required</Alerts>
            )} */}
          </div>
          <div className="mb-6">
            <label htmlFor="descpertion" className="form-lable{">
              Short Descpertion
            </label>
            <textarea
              id="Descpertion"
              className="block w-full p-4 textArea"
              placeholder="Descpertion.."
              value={shortDes}
              onChange={(e: any) => {
                setShortDes(e.target.value);
              }}
            ></textarea>
            {errors.shortDes && shortDes.trim().length == 0 && (
              <Alerts danger>Short Descpertion is required</Alerts>
            )}
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="descpertion" className="form-lable{">
              Descpertion
            </label>
            <div className="flex items-center justify-center w-full">
              <textarea
                id="Descpertion"
                className="block w-full p-8 textArea"
                placeholder=""
                value={description}
                onChange={(e: any) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
              {errors.description && description.trim().length == 0 && (
                <Alerts danger> Description is required</Alerts>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="dropZone dark:bg-gray-600 hover:bg-gray-200"
              >
                {coverImg.name === undefined
                  ? "Upload Cover Image"
                  : coverImg.name.slice(0, 25)}
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {" "}
                    PNG, JPG , (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e: any) => {
                    setCoverImage(e.target.files[0]);
                  }}
                />
                {errors.coverImage && (
                  <Alerts danger>Cover Imgae is required</Alerts>
                )}
              </label>
            </div>
          </div>
        </div>

        <Button type="primary" lg>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ShowCaseForm;
