const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border"
        />

        <div>
          <h2 className="text-xl font-bold">{user.login}</h2>

          <p className="text-gray-500">
            ID: {user.id}
          </p>

          <p className="text-gray-500">
            Type: {user.type}
          </p>

          {user.site_admin && (
            <span className="inline-block mt-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
              Admin
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          GitHub Profile
        </a>

        <a
          href={user.repos_url}
          target="_blank"
          rel="noreferrer"
          className="border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          Repositories
        </a>

        <a
          href={user.followers_url}
          target="_blank"
          rel="noreferrer"
          className="border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          Followers
        </a>
      </div>
    </div>
  );
};

export default UserCard;