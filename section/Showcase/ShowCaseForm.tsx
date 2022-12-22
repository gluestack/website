import React, { useEffect, useRef, useState } from "react";
import Alerts from "../../components/Alerts";
import Button from "../../components/Button";

function ShowCaseForm() {
  const [name, setName] = useState<any>("");
  const [projectName, setProjectName] = useState<any>("");
  const [githubLink, setGithubLink] = useState<any>("");
  const [twitterLink, setTwitterLink] = useState<any>("");
  const [demoLink, setDemoLink] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [tags, setTags] = useState<any>("");
  const [profileImage, setProfileImage] = useState<any>("");
  const [descpertion, setDescpertion] = useState<any>("");
  const [coverImage, setCoverImage] = useState<any>("");

  const [errors, setErrors] = useState<any>({});
  
// function checkError(value:any,errors:any){
//     console.log(value);
    
//     return errors.value && value.trim().length==0
// }





  const handleValidation = () => {
   
    let tempErrors: any = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (projectName.length <= 0) {
      tempErrors["projectName"] = true;
      isValid = false;
    }
    if (githubLink.length <= 0) {
      tempErrors["githubLink"] = true;
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
    if (category.length <= 0) {
      tempErrors["category"] = true;
      isValid = false;
    }
    if (tags.length <= 0) {
      tempErrors["tags"] = true;
      isValid = false;
    }
    if (profileImage.length <= 0) {
      tempErrors["profileImage"] = true;
      isValid = false;
    }
    if (descpertion.length <= 0) {
      tempErrors["descpertion"] = true;
      isValid = false;
    }
    if (coverImage.length <= 0) {
      tempErrors["coverImage"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  const postData = {
    name,
    projectName,
    githubLink,
    twitterLink,
    demoLink,
    category,
    tags,
    descpertion,
    coverImage,
    profileImage
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      let formData = new FormData();
      formData.append("files.file", profileImage);
      formData.append("data", JSON.stringify(postData));
      console.log(postData, "postData");
      console.log(formData, "formData");

      //   axios({
      //     method: "POST",
      //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
      //     data: formData,
      //   }).then((res) => {
      //     console.log(res, " res");
      //   });
    }
  };

  return (
    <div className="container py-14">
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
            {errors.name && name.trim().length==0 && <Alerts danger>Name is required</Alerts>}
          </div>
          <div>
            <label htmlFor="project_name" className="form-lable{">
              Project Name
            </label>
            <input
              type="text"
              id="project_name"
              className="form-input"
              placeholder="project_name"
              value={projectName}
              onChange={(e: any) => {
                setProjectName(e.target.value);
              }}
            />
             {errors.projectName && projectName.trim().length==0 && <Alerts danger>project Name is required</Alerts>}
          </div>
          <div>
            <label htmlFor="github_link" className="form-lable{">
              Github Link
            </label>
            <input
              type="url"
              id="github_link"
              className="form-input"
              placeholder="github.com"
              value={githubLink}
              onChange={(e: any) => {
                setGithubLink(e.target.value);
              }}
            />
             {errors.githubLink && githubLink.trim().length==0 && <Alerts danger>Github link is required</Alerts>}
          </div>
          <div>
            <label htmlFor="twitter_link" className="form-lable{">
              Twitter Link
            </label>
            <input
              type="url"
              id="twitter_link"
              className="form-input"
              placeholder="twitter.com"
              value={twitterLink}
              onChange={(e: any) => {
                setTwitterLink(e.target.value);
              }}
            />
             {errors.twitterLink && twitterLink.trim().length==0 && <Alerts danger>Twitter link is required</Alerts>}
          </div>
          <div>
            <label htmlFor="demo_link" className="form-lable{">
              Demo Link
            </label>
            <input
              type="url"
              id="demo_link"
              className="form-input"
              placeholder="xyz.com"
              value={demoLink}
              onChange={(e: any) => {
                setDemoLink(e.target.value);
              }}
            />
             {errors.demoLink && demoLink.trim().length==0 && <Alerts danger>Demo link is required</Alerts>}
          </div>
          <div>
            <label htmlFor="category" className="form-lable{">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="form-input"
              placeholder="Project..etc"
              value={category}
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
            />
            {errors.category && category.trim().length==0 && <Alerts danger>Category is required</Alerts>}
          </div>
          <div>
            <label htmlFor="Tags" className="form-lable{">
              Tags
            </label>
            <input
              type="text"
              id="Tags"
              className="form-input"
              placeholder="#app #website....etc"
              value={tags}
              onChange={(e: any) => {
                setTags(e.target.value);
              }}
            />
             {errors.tags && tags.trim().length==0 && <Alerts danger>Tags is required</Alerts>}
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
             {errors.profileImage && <Alerts danger>Profile Imgae is required</Alerts>}
          </div>
          <div className="mb-6">
            <label htmlFor="descpertion" className="form-lable{">
              Descpertion
            </label>
            <textarea
              id="Descpertion"
              className="block p-2.5 w-full textArea"
              placeholder="descpertion..."
              value={descpertion}
              onChange={(e: any) => {
                setDescpertion(e.target.value);
              }}
            ></textarea>
             {errors.descpertion && descpertion.trim().length==0 && <Alerts danger>Descpertion is required</Alerts>}
          </div>
        </div>

        <div className="mb-6">
          <div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="dropZone dark:bg-gray-600 hover:bg-gray-200"
              >
               {coverImage.name === undefined ? "Upload Cover Image" : coverImage.name.slice(0,25)}
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
                {errors.coverImage  && <Alerts danger >Cover Imgae is required</Alerts>}
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
