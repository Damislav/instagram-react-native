import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider
        style={{ alignSelf: "stretch", backgroundColor: "#fff" }}
        width={1}
        orientation="vertical"
      />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
        }}
      >
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

export const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.story} source={{ uri: post.profilePicture }} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", color: "white" }}>...</Text>
    </View>
  );
};
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgStyle={styles.footer} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);
const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/6111/premium/6111867.png?token=exp=1644592511~hmac=f9f36270db4f8d9807f9e802ef476a0f",

    likedImageUrl:
      "https://cdn-icons.flaticon.com/png/512/6111/premium/6111867.png?token=exp=1644592511~hmac=f9f36270db4f8d9807f9e802ef476a0f",
  },
  {
    name: "Comment",
    imageUrl:
      "https://svg-clipart.com/clipart/heart/wQ2JmBo-white-heart-outline-new-clipart.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://svg-clipart.com/clipart/heart/wQ2JmBo-white-heart-outline-new-clipart.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://svg-clipart.com/clipart/heart/wQ2JmBo-white-heart-outline-new-clipart.png",
  },
];

const Icon = (imgStyle, imgUrl) => (
  <View>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
    <Image style={imgStyle} source={{ uri: imgUrl }} />
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>{" "}
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);
const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments > 1 ? "all" : " "}
        {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
// ¸0 comments dont render component
// ¸1 render component without the world all
// ¸render with all and say plural comments
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 6,
    borderWidth: 1.6,
    borderColor: "ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: "-1",
  },
});

export default Post;
console.log(postFooterIcons[0].imageUrl);
