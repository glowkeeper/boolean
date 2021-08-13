/* eslint-disable camelcase */
export interface Story {
  profile_picture: string
  profile_name: string
}

export interface Comment {
  username: string
  text: string
}

export interface Like {
  username: string
  profile_picture: string
}

export interface Feed {
  profile_picture: string
  profile_name: string,
  profile_fullname: string,
  post_image: string,
  post_text: string
  date: {
      date: string,
      timezone_type: number,
      timezone: string
  },
  comments: Array<Comment>
  likes: Array<Like>
}
