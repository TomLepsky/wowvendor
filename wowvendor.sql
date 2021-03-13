
CREATE TABLE `wowvendor` (
  `id` int(11) NOT NULL,
  `rock_position` int(11) NOT NULL DEFAULT '0',
  `round_time` float NOT NULL DEFAULT '0',
  `jump_distance` int(11) NOT NULL DEFAULT '0',
  `rock_size` int(11) NOT NULL DEFAULT '0',
  `result` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wowvendor`
--

INSERT INTO `wowvendor` (`id`, `rock_position`, `round_time`, `jump_distance`, `rock_size`, `result`) VALUES
(1, 411, 2.2, 244, 78, 0),
(2, 827, 4.3, 674, 67, 0),
(3, 343, 1.8, 176, 70, 0),
(4, 317, 5.2, 180, 54, 1),
(5, 440, 5.2, 310, 57, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `wowvendor`
--
ALTER TABLE `wowvendor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `wowvendor`
--
ALTER TABLE `wowvendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;
