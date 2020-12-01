# README

# Chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
<<<<<<< Updated upstream
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :comments
- has_many :group

## groups_usersテーブル

=======
|name|string|null: false|
|password|string|null: false|
|password conformation|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groups_usersテーブル
>>>>>>> Stashed changes
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

<<<<<<< Updated upstream
## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text|null: false|
=======
## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|text|
>>>>>>> Stashed changes
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

<<<<<<< Updated upstream
=======
# groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groups_name|string|null: false, unique:true|
### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through:groups_users
>>>>>>> Stashed changes
