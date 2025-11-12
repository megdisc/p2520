// Server Componentとして動作します (デフォルト)

export default function Hero() {
  return (
    <div className="p-mainVisual__content">
      <div className="p-mainVisual__content__inner">
        <div className="p-mainVisual__content__title">
          <div className="p-mainVisual__content__title__textBox1">
            <p className="p-mainVisual__content__title__textBox1__text">
              介護転職<span className="small">の</span>
              <span className="middle">求人サイト</span>
            </p>
          </div>
          <div className="p-mainVisual__content__title__textBox2">
            <p className="p-mainVisual__content__title__textBox2__text">
              好条件求人多数！
            </p>
          </div>
        </div>
        <div className="p-mainVisual__content__badge">
          <ul>
            <li>介護業界特化！業界20年以上の実績！</li>
            <li>月給33万円以上の求人多数！</li>
            <li>残業少なめ週休2日など好条件多数！</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
