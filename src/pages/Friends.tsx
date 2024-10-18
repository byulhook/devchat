const Friends = () => {
  // 가짜 데이터
  const data = {
    friends: [
      { id: 2, name: '시카노코 노코' },
      { id: 3, name: '나나 데빌룩' },
      { id: 4, name: '플랑드르 스칼렛' },
      { id: 5, name: '프랑켄슈타인' },
      { id: 7, name: '라라 데빌룩' },
    ],
  };
  return (
    <div>
      <h1>❤️친구 목록❤️</h1>
      <ul>
        {data.friends.map((friend: { id: number; name: string }) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
