import { feature, product, featureItem, priceItem } from "atmn";

export const comments = feature({
  id: "comments",
  name: "Comments",
  type: "single_use",
});

export const adminControls = feature({
  id: "admin_controls",
  name: "Admin Controls",
  type: "boolean",
});

export const commentEditing = feature({
  id: "comment_editing",
  name: "Comment Editing",
  type: "boolean",
});

export const free = product({
  id: "free",
  name: "Free",
  is_default: true,
  items: [
    featureItem({
      feature_id: comments.id,
      included_usage: 10,
      interval: "month",
    }),
  ],
});

export const pro = product({
  id: "pro",
  name: "Pro",
  items: [
    priceItem({
      price: 9.99,
      interval: "month",
    }),
    featureItem({
      feature_id: comments.id,
      included_usage: 100,
      interval: "month",
    }),
    featureItem({
      feature_id: commentEditing.id,
    }),
  ],
});

export const premium = product({
  id: "premium",
  name: "Premium",
  items: [
    priceItem({
      price: 19.99,
      interval: "month",
    }),
    featureItem({
      feature_id: comments.id,
      included_usage: -1,
    }),
    featureItem({
      feature_id: commentEditing.id,
    }),
    featureItem({
      feature_id: adminControls.id,
    }),
  ],
});