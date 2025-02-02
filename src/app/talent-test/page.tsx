import './tailwind.CzzIUtUe.css';

const page = () => {
    return (
        <div className='mx-auto h-screen max-w-sm'>
            <div className='py-10 text-center text-2xl'>
                <img
                    className='mx-auto'
                    src='https://joy-pan-1309260004.cos.ap-beijing.myqcloud.com/once/240921/logo.png'
                />
            </div>
            <div className='relative'>
                <form>
                    <div className='p-4'>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>以下哪一個形容詞最能描述你?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>有創意</span>

                                            <input type='radio' className='radio' name='102001' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>好相處</span>
                                            <input type='radio' className='radio' name='102001' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>謹慎小心</span>
                                            <input type='radio' className='radio' name='102001' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>註重細節</span>
                                            <input type='radio' className='radio' name='102001' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最希望在別人眼中你是怎樣的人?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>友善</span>
                                            <input type='radio' className='radio' name='102002' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>可靠</span>
                                            <input type='radio' className='radio' name='102002' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>果斷</span>
                                            <input type='radio' className='radio' name='102002' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>活潑</span>
                                            <input type='radio' className='radio' name='102002' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>以下哪種狀況是你會最享受的?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>能掌控全局</span>
                                            <input type='radio' className='radio' name='102003' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>能發揮創意</span>
                                            <input type='radio' className='radio' name='102003' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>能被尊敬景仰</span>
                                            <input type='radio' className='radio' name='102003' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>能感知到外界變化</span>
                                            <input type='radio' className='radio' name='102003' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>
                                        在開始進行一個項目時，你最喜歡負責的會是以下哪一種任務?
                                    </h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>策略規劃</span>
                                            <input type='radio' className='radio' name='102004' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>人際交流</span>
                                            <input type='radio' className='radio' name='102004' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>團隊規劃</span>
                                            <input type='radio' className='radio' name='102004' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>規劃系統</span>
                                            <input type='radio' className='radio' name='102004' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>參與聚會時，别人通常會怎麽描述你?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>肆無忌憚</span>
                                            <input type='radio' className='radio' name='102005' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>善於社交</span>
                                            <input type='radio' className='radio' name='102005' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>矜持保守</span>
                                            <input type='radio' className='radio' name='102005' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>自信肯定</span>
                                            <input type='radio' className='radio' name='102005' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>
                                        當你需要在壓力下完成工作時，以下哪一個是你最'不'仰賴的選項?
                                    </h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的努力</span>
                                            <input type='radio' className='radio' name='102006' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的天賦才華</span>
                                            <input type='radio' className='radio' name='102006' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的人脈</span>
                                            <input type='radio' className='radio' name='102006' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的效率</span>
                                            <input type='radio' className='radio' name='102006' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>以下哪一個形容詞最能描述你?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>內向含蓄</span>
                                            <input type='radio' className='radio' name='102007' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>不夠專注</span>
                                            <input type='radio' className='radio' name='102007' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>猶豫不決</span>
                                            <input type='radio' className='radio' name='102007' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>缺乏耐心</span>
                                            <input type='radio' className='radio' name='102007' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>當需要做重大決定時，你⽐較喜歡怎麽做?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>詢問朋友的建議</span>
                                            <input type='radio' className='radio' name='102008' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>看其他人的決定如何</span>
                                            <input type='radio' className='radio' name='102008' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>仔細考量每一個面向</span>
                                            <input type='radio' className='radio' name='102008' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>順從自己内在指引</span>
                                            <input type='radio' className='radio' name='102008' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最不希望別人認為你是怎樣的人?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>軟弱</span>
                                            <input type='radio' className='radio' name='102009' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>無趣</span>
                                            <input type='radio' className='radio' name='102009' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>孤獨</span>
                                            <input type='radio' className='radio' name='102009' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>不可靠</span>
                                            <input type='radio' className='radio' name='102009' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最喜歡以下哪一種選項?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>交易買賣的事業</span>
                                            <input type='radio' className='radio' name='102010' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>連鎖事業的營運</span>
                                            <input type='radio' className='radio' name='102010' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>快速成長的新創事業</span>
                                            <input type='radio' className='radio' name='102010' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>基於人際交流的事業</span>
                                            <input type='radio' className='radio' name='102010' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>
                                        在一個項目開始進行時，你最'不'喜歡的是哪一種任務?
                                    </h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>策略規劃</span>
                                            <input type='radio' className='radio' name='102011' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>團隊規劃</span>
                                            <input type='radio' className='radio' name='102011' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>系統規劃</span>
                                            <input type='radio' className='radio' name='102011' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>人際交流</span>
                                            <input type='radio' className='radio' name='102011' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最常在一個團隊裏扮演哪個角色?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>分析者</span>
                                            <input type='radio' className='radio' name='102012' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>創意來源</span>
                                            <input type='radio' className='radio' name='102012' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>對外公關</span>
                                            <input type='radio' className='radio' name='102012' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>可靠的執行者</span>
                                            <input type='radio' className='radio' name='102012' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最'不'擅長的是以下哪個選項?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>建立關係</span>
                                            <input type='radio' className='radio' name='102013' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>談判更好的價格</span>
                                            <input type='radio' className='radio' name='102013' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>產出新的構想</span>
                                            <input type='radio' className='radio' name='102013' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>完成既有的項目</span>
                                            <input type='radio' className='radio' name='102013' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最強的天賦能力是哪一個?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>找到方法來讓事物能改進提升</span>
                                            <input type='radio' className='radio' name='102014' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>找到對的人</span>
                                            <input type='radio' className='radio' name='102014' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>談到最好的價格</span>
                                            <input type='radio' className='radio' name='102014' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>依循正確的流程方法去執行</span>
                                            <input type='radio' className='radio' name='102014' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>在一個團隊中，以下哪種狀況會讓你覺得最有壓力?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>氣氛不和諧</span>
                                            <input type='radio' className='radio' name='102015' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>缺乏清楚的架構</span>
                                            <input type='radio' className='radio' name='102015' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>事情沒有進展</span>
                                            <input type='radio' className='radio' name='102015' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>氣氛不活躍</span>
                                            <input type='radio' className='radio' name='102015' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最'不'喜歡以下哪個選項?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>不請⾃來的賓客</span>
                                            <input type='radio' className='radio' name='102016' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>固定的例行公事</span>
                                            <input type='radio' className='radio' name='102016' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>頑固不知變通的人</span>
                                            <input type='radio' className='radio' name='102016' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>混亂與不確定性</span>
                                            <input type='radio' className='radio' name='102016' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最擅長的是...?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>促銷推廣</span>
                                            <input type='radio' className='radio' name='102017' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>談判</span>
                                            <input type='radio' className='radio' name='102017' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>完成</span>
                                            <input type='radio' className='radio' name='102017' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>創造</span>
                                            <input type='radio' className='radio' name='102017' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最'不'擅⾧的是...?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>創造能讓事物改善提升的系統</span>
                                            <input type='radio' className='radio' name='102018' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>分析趨勢並從中找到機會</span>
                                            <input type='radio' className='radio' name='102018' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>發想出新的創意</span>
                                            <input type='radio' className='radio' name='102018' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>與他人相處來往</span>
                                            <input type='radio' className='radio' name='102018' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>以下哪個選項會讓你有最大的成就感?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>看到你的創意想法成為真實</span>
                                            <input type='radio' className='radio' name='102019' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>認識到一位很棒的新朋友</span>
                                            <input type='radio' className='radio' name='102019' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>找到難得一見的便宜好貨</span>
                                            <input type='radio' className='radio' name='102019' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>
                                                看到自己的系統如鐘表裝置一般順暢運作
                                            </span>
                                            <input type='radio' className='radio' name='102019' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>以下哪種人會讓你覺得最困擾?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>破壞規矩的人</span>
                                            <input type='radio' className='radio' name='102020' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>不會主動採取行動的人</span>
                                            <input type='radio' className='radio' name='102020' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>對人不友善的人</span>
                                            <input type='radio' className='radio' name='102020' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>不照顧別人的人</span>
                                            <input type='radio' className='radio' name='102020' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>在工作上，其他人最常用哪個形容詞來描述你?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>值得信賴</span>
                                            <input type='radio' className='radio' name='102021' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>很有條理架構</span>
                                            <input type='radio' className='radio' name='102021' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>很有創意</span>
                                            <input type='radio' className='radio' name='102021' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>活潑外向</span>
                                            <input type='radio' className='radio' name='102021' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>在工作上，其他人最'不會'⽤哪個形容詞來描述你?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>值得信賴</span>
                                            <input type='radio' className='radio' name='102022' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>很有條理架構</span>
                                            <input type='radio' className='radio' name='102022' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>很有創意</span>
                                            <input type='radio' className='radio' name='102022' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>活潑外向</span>
                                            <input type='radio' className='radio' name='102022' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>你最擅長的是...?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>與他人相處來往</span>
                                            <input type='radio' className='radio' name='102023' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>分析趨勢並從中找到機會</span>
                                            <input type='radio' className='radio' name='102023' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>創造能讓事物改善提升的系統</span>
                                            <input type='radio' className='radio' name='102023' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>發想出新的創意</span>
                                            <input type='radio' className='radio' name='102023' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>
                                        需要在壓力下繼續前進時，以下哪一個會是你最仰賴的選項?
                                    </h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的效率</span>
                                            <input type='radio' className='radio' name='102024' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的天賦才華</span>
                                            <input type='radio' className='radio' name='102024' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的人脈</span>
                                            <input type='radio' className='radio' name='102024' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>你的努力</span>
                                            <input type='radio' className='radio' name='102024' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='card border shadow-sm'>
                                <div className='card-body'>
                                    <h2 className='card-title mb-4'>在完成一個項目後，你最享受的會是哪個部分...?</h2>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>慶祝項目完成</span>
                                            <input type='radio' className='radio' name='102025' value='1' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>恭賀團隊成員</span>
                                            <input type='radio' className='radio' name='102025' value='2' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>把需要的文書作業處理好</span>
                                            <input type='radio' className='radio' name='102025' value='3' />
                                        </label>
                                    </div>
                                    <div className='form-control'>
                                        <label className='label cursor-pointer'>
                                            <span className='label-text text-lg'>馬上開始新的項目</span>
                                            <input type='radio' className='radio' name='102025' value='4' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sticky inset-x-0 bottom-0 max-h-32 bg-white p-5'>
                        <div className='mx-auto max-w-sm'>
                            <div className='mb-2 text-black'>完成度</div>
                            <button type='button' className='btn btn-primary w-full'>
                                提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
